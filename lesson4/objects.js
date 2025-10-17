const complexObject = {
    level1: "value1",

    nestedObject: {
        property1: 10,
        property2: 20
    },

    items: [1, 2, 3, 4, 5],

    showValues: function() {
        console.log("Рівень 1:", this.level1);
        console.log("Вкладений об'єкт:");
        console.log("  властивість 1:", this.nestedObject.property1);
        console.log("  властивість 2:", this.nestedObject.property2);
        console.log("Масив елементів:", this.items);
    }
};

complexObject.showValues();
