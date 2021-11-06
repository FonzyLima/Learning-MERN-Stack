const router = require('express').Router();
let Order = require('../models/orders.model');

router.route('/').get((req,res) => {
    Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Errorttt: '+err));
});

router.route('/add').post((req,res)=>{
    const order_num = Number(req.body.order_num);
    const date = req.body.date;
    const client_name = req.body.client_name;
    const amount = Number(req.body.amount);

    const newOrder = new Order({order_num,date,client_name,amount});

    newOrder.save()
    .then(() => res.json('Order Added!'))
    .catch(err => res.status(400).json('Errorss: '+ err));

});

module.exports = router;