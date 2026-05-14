const order = {id: 1, status: "pending"};

function deliverOrder(order){
    order.status = "delivered";
    return order;
}

console.log(deliverOrder(order));

