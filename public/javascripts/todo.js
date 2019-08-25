const React = require('react');

export class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form action="/newTodo" method="post">
                    <label> Inserta un nuevo todo </label>
                    <input type="text" name="Description" placeholder="Description" autofocus="true" />
                    <input type="text" name="Responsible" placeholder="Responsible" />
                    <input type="text" name="Completed" placeholder="True or False" />
                    <button type="submit">Envia los datos</button>
                </form>
            </div>
        );
    }
}

module.exports = TodoForm;
