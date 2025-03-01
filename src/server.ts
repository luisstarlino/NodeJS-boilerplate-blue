/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-03-01 18:18
* @Description: Add here your description..
*****************************************************************************************/

// ===== IMPORTS
import createApp from './app';

// ===== CONSTS
const app = createApp();
const port = process.env.PORT;

app.listen(port, () => console.log(`✅ Server on at port http://localhost:${port} ✅`));
