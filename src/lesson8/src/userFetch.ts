interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    company: Company;
}

const JSON_URL = 'https://jsonplaceholder.typicode.com/users/1';

async function fetchUser(url: string = JSON_URL): Promise<User> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Помилка при завантаженні даних: ${response.status}`);
    }

    const data: User = await response.json();
    return data;
}

class ShortUserInfo {
    fullName: string;
    companyName: string;
    location: string;

    constructor(user: User) {
        this.fullName = user.name;
        this.companyName = user.company.name;
        this.location = `${user.address.city} (${user.address.geo.lat}, ${user.address.geo.lng})`;
    }
}

async function main() {
    try {
        const user = await fetchUser();
        console.log('Отримано користувача:');
        console.log(user);

        const shortInfo = new ShortUserInfo(user);
        console.log('\n Скорочена інформація:');
        console.log(shortInfo);
    } catch (err) {
        console.error('Сталася помилка:', err);
    }
}

main();
