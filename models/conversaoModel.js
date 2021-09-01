const fetch = require ('node-fetch')

const conversao = async (req, res) => {
    let url = "https://economia.awesomeapi.com.br/last/BRL-USD"
    let result = await fetch(url)
    let dados = await result.json()
    let resultado = (dados["BRLUSD"].bid)
    let valor = (resultado * req.params.valor_real)
    return(res.json({valor}))
}

module.exports = {conversao}