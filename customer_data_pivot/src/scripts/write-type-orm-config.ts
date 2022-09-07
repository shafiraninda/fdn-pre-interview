import { configService } from 'src/config/config.service';
import fs = require('fs');

const config = configService .getTypeOrmConfig(true)
fs.writeFileSync('ormconfig.json', JSON.stringify(config, null, 4));