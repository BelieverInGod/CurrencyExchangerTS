class CurrencyServices {

    getResource = async (url) => {
        let res = await fetch(url)
        
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        };
        return await res.json();
    };

    getToday = () => {
        const date = new Date()
    
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    

    getAllCurrency = async () => {
        return await this.getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    };

    getCurrency = (time) => {
        return this.getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange/${time}?json`);
    }

};

export default CurrencyServices;