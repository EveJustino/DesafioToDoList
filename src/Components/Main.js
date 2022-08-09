import React, { Component } from "react";

export default class Main extends Component {
  state = {
    filme: "",
    listaFilmes: []
  };

  handleChange = (event) => {
    this.setState({
      filme: event.target.value
    });
  };

  Send = (event) => {
    event.preventDefault();
    if (this.state.filme !== "") {
      this.setState({
        listaFilmes: this.state.listaFilmes.concat({
          filme: this.state.filme,
          id: Date.now()
        }),
        filme: ""
      });
    }
  };

  Remove = (id) => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter((ident) => ident.id !== id)
    });
  };

  RemoveAll = () => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter((ident) => ident.listaFilmes)
    });
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.filme} />
        <button onClick={this.Send}>Enviar</button>
        <button onClick={() => this.RemoveAll()}>Excluir tudo!</button>
        {this.state.listaFilmes.map((item) => (
          <div>
            <ul>
              <li>{item.filme}</li>
            </ul>
            <button
              onClick={() => {
                this.Remove(item.id);
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
        ))}
      </form>
    );
  }
}
