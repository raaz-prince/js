const myObjects = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObjects) {
    console.log(`${key} shortucut is for ${myObjects[key]}`);
    }

    // for in loop  we get key and in for of loop we get value