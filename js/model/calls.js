class Calls {

    constructor(equipamento = "", descricao = "", prioridade = "", status = "", data = "") {
        this.equipamento = equipamento;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = status;
        this.data = data;
    }

    addCall() {
        const newCall = {
            id: crypto.randomUUID(),
            equipamento: this.equipamento,
            descricao: this.descricao,
            prioridade: this.prioridade,
            status: this.status,
            data: this.data
        }

        const calls = JSON.parse(localStorage.getItem("calls")) || [];
        calls.push(newCall);

        localStorage.setItem("calls", JSON.stringify(calls));
        // if (calls) {
        //     let arrayCalls = JSON.parse(calls);
        //     arrayCalls.push(newCall);

        //     localStorage.setItem("calls", JSON.stringify(arrayCalls));
        // } else {
        //     calls = [];
        //     calls.push(newCall);

        //     localStorage.setItem("calls", JSON.stringify(calls));
        // }

    }

    getCalls() {
        const calls = JSON.parse(localStorage.getItem("calls"));

        return calls;
    }

    updateCalls(calls) {
        console.log(calls)
        localStorage.setItem("calls", JSON.stringify(calls));
    }
}
