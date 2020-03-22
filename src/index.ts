import * as express from 'express';
import * as bodyParser from 'body-parser';
import { HttpProvider } from '@0xcert/ethereum-http-provider';
import { AssetLedger, AssetLedgerAbility } from '@0xcert/ethereum-asset-ledger';

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const port = 3000;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

const provider = new HttpProvider({
    url: 'http://localhost:8545',
    requiredConfirmations: 1,
    accountId: '0x5C4756bb912Dea209B94587D4d761aCE5d321054'
});

app.post('/deploy', async (req, res) => {
    const mutation = await AssetLedger.deploy(provider, {
        name: req.body.name,
        symbol: req.body.symbol,
        uriPrefix: req.body.uriPrefix,
        uriPostfix: req.body.uriPostfix,
        schemaId: req.body.schemaId,
        capabilities: req.body.capabilities
    }); // You can catch errors by adding .catch((e) => console.log(e)).

    res.send(mutation.id);

});

app.post('/create', async (req, res) => {
    const ledger = AssetLedger.getInstance(provider, req.body.assetLedgerId);
    const mutation = await ledger.createAsset({
        receiverId: req.body.receiverId,
        id: req.body.id,
        imprint: req.body.imprint
    });
    
    res.send(mutation.id);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

