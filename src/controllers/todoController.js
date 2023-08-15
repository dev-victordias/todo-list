

exports.get = (req, res) => {
    const id = req.params.id;
    console.log("Get");
    res.send(`OK Get id = ${id}`);
}

exports.getAll = (req, res) => {
    console.log("Get All");
    res.send("OK Get All");
}

exports.add = (req, res) => {
    console.log("Add");
    res.send("OK Add");
}

exports.update = (req, res) => {
    const id = req.params.id;
    console.log("Update");
    res.send(`OK Update id = ${id}`);
}

exports.delete = (req, res) => {
    const id = req.params.id;
    console.log("Delete");
    res.send(`OK Delete id = ${id}`);
}