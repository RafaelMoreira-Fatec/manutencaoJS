const equipamentos = [
    { id: 1, nome: "Motor elétrico 5 CV", categoria: "Elétrico" },
    { id: 2, nome: "Bomba centrífuga", categoria: "Mecânico" },
    { id: 3, nome: "Painel elétrico trifásico", categoria: "Elétrico" },
    { id: 4, nome: "Compressor de ar", categoria: "Pneumático" },
    { id: 5, nome: "Prensa hidráulica", categoria: "Hidráulico" },
    { id: 6, nome: "Portão automático", categoria: "Predial" }
];

equipamentos.sort((a, b) => {
    if (a.categoria > b.categoria) {
        return 1;
    }
    if (a.categoria < b.categoria) {
        return -1;
    }

    return 0
}) 