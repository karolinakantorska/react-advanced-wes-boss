const Query = {
    dogs(parent, arg, ctx, info) {
        global.dogs = global.dogs || [];
        return global.dogs;
    }
    
};

module.exports = Query;
