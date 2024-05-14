function createValidatedUser(user) {
    const emailPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;
    const userProxy = new Proxy(user, {
        set: (o, prop, r) => {
            if(prop==="age" && (prop<18 || prop>120)) {
                throw new Error("Age property is invalid");
            } 
            if(prop==="name" && (prop.length>100 || prop===undefined)) {
                throw new Error("Name property is invalid");
            }
            if(prop==="email" && (prop.length>100 || !(emailPattern.test(prop)))) {
                throw new Error("Email property is invalid");
            }
            o[prop] = r;
        }
    });
    return userProxy;
}