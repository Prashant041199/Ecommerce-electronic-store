import React from 'react'

const mongoose = require('mongoose');


const Test = () => {

    mongoose.connect('mongodb://127.0.0.1:27017/test');

    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

    return (
        <div>Test</div>
    )
}

export default Test