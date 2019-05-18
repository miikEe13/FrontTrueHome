import React, { Component } from 'react';
import { api_url } from "../utils/Url";
import Item from "../Components/Property/Item"

export default class Home extends Component {
    state = {
        loading: true,
        error: null,
        propertys: null
    };

    componentDidMount() {
        this.loadPropertys();
    }
    loadPropertys = () => {
        const url = `${api_url}propertys/`;
        console.log("loading propertys");
        this.setState({
            loading: true,
            error: null
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    propertys: data.data
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                });
            });
    };
    renderList = propertys => {
        console.log(propertys)
        const list = propertys.map(item => {
            console.log(item)
            return <Item key={item._id} data={item} />;
        });
        return list;
    };
    render() {
        const { loading, propertys, error } = this.state;
        return (
            <section className="container wrapper-cards">
                <div className="row">
                    <div className="col-sm-12 title">
                        <h1>Propiedades inmobiliarias</h1>
                    </div>
                    <div className="col-sm-12">
                        {!loading &&
                            propertys && (
                                <div className="row">{this.renderList(propertys)}</div>
                            )}
                    </div>
                </div>
            </section >
        );
    }
}
