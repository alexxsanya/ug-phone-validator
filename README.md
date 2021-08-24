## Validation of Uganda Phone Number

This is a lite package to validate ugandan phone numbers based on the formats set by Uganda Communication Commission (UCC)  as in this [link](https://www.ucc.co.ug/files/downloads/The%20Uganda%20National%20Numbering%20Plan%20%28Under%20review%29.pdf)

### Use cases
- Validate phone
- Determine whether a number is office line, mobile number or toll free number excluding numbers like 112, 999
- Determine telecom company the number belongs to

### Installation 

```
$ npm install ug-phone-validator --save
```
or 

```
yarn add ug-phone-validator
```

### Usage 
The module accepts the various Number format
`+2567XXXXXXXX`, `2567XXXXXXXX`, `07XXXXXXXX`, `7XXXXXXXX`

However the module returns the phone number in the format
`7XXXXXXXX`


Here is the implementation:

```js

const {validateUGPhone} = require('../index')

validateUGPhone("+256772100100") //returns JSON object
validateUGPhone("256772100100") //returns JSON object
validateUGPhone("0772100100") //returns JSON object
validateUGPhone("772100100") //returns JSON object

```

### valid phone number response
```JSON
    {
    "phone": '772100100',
    "valid": true,
    "info": "Is valid ugandan phone number",
    "telco": "MTN Uganda",
    "type": "mobile"
    }

```

### An invalid phone number response
```JSON
{
  "phone": "25688200567563",
  "valid": false,
  "info": "Phone number 25688200567563 is not a valid ugandan number",
  "telco": "unknown",
  "type": "unknow"
}

```
### MORE OPTIONS 

To simply determine if a number is valid or not

```js 
validateUGPhone("+256772100100").valid ; // true 
```

To get only the phone number telecom provider

```js 
validateUGPhone("+256772100100").telco ; // MTN Uganda 
```

To get simply determine if a number an office line, mobile or toll free

```js 
validateUGPhone("+256772100100").type ; // mobile 
```


### Reporting bugs 
For any issues, you may create one click [here](https://github.com/alexxsanya/ug-phone-validator/issues)


### Licence

MIT 