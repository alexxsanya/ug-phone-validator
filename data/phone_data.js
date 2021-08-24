exports.phoneData =
{
    phoneLength: 9,
    countryCode: '256',
    regex: (number) => /^([+]{0,1})[\d]{9,12}$/g.test(`${number}`),
    phoneTypes: [
        {
            name: "office",
            prefix: ['20', '31', '39', '41'],
        },
        {
            name: "mobile",
            prefix: ['70', '71', '75', '76', '77', '78'],
        },
        {
            name: "toll_free",
            prefix: ['80'],
        }
    ],
    providers: [
        {
            name: "Uganda Telecom",
            slug: "ugtel",
            range: [
                { mn: 710, mx: 719 }
            ]
        },
        {
            name: "MTN Uganda",
            slug: "mtnug",
            range: [
                { mn: 770, mx: 770 },
                { mn: 780, mx: 789 },
                { mn: 760, mx: 760 },
                { mn: 390, mx: 399 },
            ]
        },
        {
            name: "Airtel Uganda",
            slug: "airtelug",
            range: [
                { mn: 700, mx: 709 },
                { mn: 750, mx: 759 },
                { mn: 200, mx: 209 },
            ]
        },
        {
            name: "Africell Uganda",
            slug: "africellug",
            range: [
                { mn: 790, mx: 799 },
            ]
        },
        {
            name: "Lyca Uganda",
            slug: "lycaug",
            range: [
                { mn: 726, mx: 726 },
            ]
        },
        {
            name: "Smile Telecom",
            slug: "smileug",
            range: [
                { mn: 720, mx: 729 },
            ]
        },
        {
            name: "K2 Telecom",
            slug: "smileug",
            range: [
                { mn: 730, mx: 739 },
            ]

        },
        {
            name: "Any",
            slug: "any",
            range: [
                { min: 20, max: 82 }
            ]
        }
    ]

}