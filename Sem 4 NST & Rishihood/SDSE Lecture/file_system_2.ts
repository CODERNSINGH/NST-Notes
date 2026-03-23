class Phone {
    constructor(public name: string, public price: number) {}
}

class PhoneStore {
    private phones: Phone[] = [];

    addPhone(phone: Phone): void {
        this.phones.push(phone);
    }

    getPhones(): Phone[] {
        return this.phones;
    }
}


interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

interface Observer {
    update(subject: Subject): void;
}

class PhoneStoreWithObservers implements Subject {
    private phones: Phone[] = [];
    private observers: Observer[] = [];

    addPhone(phone: Phone): void {
        this.phones.push(phone);
        this.notifyObservers();
    }

    getPhones(): Phone[] {
        return this.phones;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

// Example usage:
const store = new PhoneStore();
store.addPhone(new Phone("iPhone 12", 799));
store.addPhone(new Phone("Samsung Galaxy S21", 999));

console.log(store.getPhones());