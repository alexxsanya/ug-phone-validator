const {phoneData} = require("../data/phone_data");

const standardizeMSISDN = number => {
    /**
     * In uganda phones can be accepted as +2567XX...., 2567XX..
     * 07XXXXX, 7XXXX. So this method is to standardize it to 7XXX
     */
    const phoneLength = `${number}`.length

    const isValid = phoneData.regex(number)

    if(!isValid) return ""

    switch(phoneLength){
        case 9:
            return number;
        case 10:
            return `${number}`.substring(1);
        case 12:
            return `${number}`.substring(3);
        case 13:
            return `${number}`.substring(4);
        default:
            return ''

    }

};

const numberType = (ext) => {
    //this method is to determine if a number is an office line, mobile number or toll free number
    const phoneTypes = phoneData.phoneTypes

    const msisdnCategory = phoneTypes.find(phoneType => phoneType.prefix.includes(ext))

    return msisdnCategory?msisdnCategory.name:"unknown"

}

const telcomProvider = (msisdn) => {
    //this method is to determine if a number is an office line, mobile number or toll free number
    const ext = Number(msisdn.substring(0,3))

    const telcos = phoneData.providers

    let name = "unknown"

    telcos.forEach(telco => {

        const telcoRange = telco.range

        for(const range in telcoRange){
          
            if(ext >= telcoRange[range]["mn"] && ext <= telcoRange[range]["mx"]){
                name = telco.name
            }

        }

    })

    return name

}

exports.validatePhone = (phone, telcom='any') => {

    const msisdn = standardizeMSISDN(phone)

    let isValid = false

    const resp = (status, info, telco) => {
        return {
            phone: msisdn?msisdn:phone,
            valid: status,
            info,
            telco,
            type: numberType(msisdn.substring(0,2))
        }
    }

    if(msisdn != ''){

        const provider = phoneData.providers.find(provider => provider.slug == telcom)
        
        const telco  =  telcomProvider(msisdn)

        isValid = telco?true:false

        const info = isValid?"Is valid ugandan phone number":`${msisdn} is not a valid ${provider.name} phone number`

        return resp(
            isValid, 
            info,
            telco?telco:"unknown"
        )


    }else{
        
        return resp(
            false, 
            `Phone number ${phone} is not a valid ugandan number`,
            "unknown")

    }

}