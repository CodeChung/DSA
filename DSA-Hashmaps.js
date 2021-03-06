class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }
    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
    }
    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._slots;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._slots = [];

        for (const slot of oldSlots) {
            if (slot !== undefined) {
                this.add(slot.key, slot.value);
            }
        }
    }
}

function main() {
    const lor = new HashMap()
    lor.MAX_LOAD_RATIO = .5
    lor.SIZE_RATIO = 3
    
    lor.set('Hobbit', 'Bilbo')
    lor.set('Hobbit', 'Frodo')
    lor.set('Wizard', 'Gandolf')
    lor.set('Human', 'Aragorn')
    lor.set('Elf', 'Legolas')
    lor.set('Maiar', 'The Necromancer')
    lor.set('Maiar', 'Sauron')
    lor.set('RingBearer', 'Gollum')
    lor.set('LadyOfLight', 'Galadriel')
    lor.set('HalfElven', 'Arwen')
    lor.set('Ent', 'Treebeard')
    console.log('Maiar key:', lor.get('Maiar'))
    console.log('Hobbit key:', lor.get('Hobbit'))
  
    return lor
}

const palindrome = (string) => {
    const palindromeMap = new HashMap()
    let odd = 0
    for (let i = 0; i < string.length; i++) {
        if (palindromeMap.get(string[i]) === undefined) {
        palindromeMap.set(string[i], 1)
        }
        else {
        let char = palindromeMap.get(string[i])
        palindromeMap.set(string[i], char+=1)
        }
    }
    for (let i = 0; i < palindromeMap.size; i++) {
        if(palindromeMap.get(string[i]) % 2 !==0) {
        odd++
        console.log('odd', odd)
        }
        if(odd > 1) {
        return false
        }
    }
    return true
}

const groupAnagrams = (strArr) => {
    const anagramMap = new Map()
    strArr.forEach((word) => {
        let sorted = alphabetize(word)
        if(anagramMap.has(sorted)) {
        anagramMap.get(sorted).push(word)
        }
        else {
        anagramMap.set(sorted, [word])
        }
    }) 
    return [...anagramMap.values()]
    }

    const alphabetize = word => {
        let alphebtized = word.split('').sort().join('')
    return alphebtized
}