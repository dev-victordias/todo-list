const TodoService = require("../services/TodoService");

exports.get = (req, res) => {
    const id = req.params.id;
    console.log("Get");
    res.send(`OK Get id = ${id}`);
}

exports.getAll = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();
    
        if(!todos) {
            return res.status(404).json("There are no todos publised yet!");
        }

        res.json(todos);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

exports.add = async (req, res) => {
    try {
        const createdTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        res.status(500).json({ error:error });
    }
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