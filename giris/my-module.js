export default (name) => {
    console.log(`hello ${name}`)
};

const topla = (a,b) => a+b;
const cikar = (a,b) => a-b;

const text = 'Text'
const user = {
    name: "Yigit",
    surname: "Yilmaz",
};

const users = [
    {
        name: "Yiğit",
        surname: "Yılmaz",
    },
    {
        name:"Mertcan",
        surname: "Yilmaz",
    },];

export { topla, cikar, text, user, users };
