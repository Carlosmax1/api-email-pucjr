const client = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();

const MailController = async (request, response) => {

  function getDate(){
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hrs =  date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return `${day}` + '/' + `${month}` + '/' + `${year} ${hrs}:${min}:${sec}`;
  }

  function verification(string){
    if(string === 'SIM'){
      return "SIM"
    }else{
      return "NÃO"
    }
  }

  function getHtml(form){
    if(form == 1){
      const html = `<!DOCTYPE html><html lang='pt-br'><head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet'> <style>*{margin: 0; padding: 0; box-sizing: border-box;}</style></head><body> <header style='background-color: #111; text-align: center; padding: 1em;'> <h1 style='font-family: Poppins, sans-serif ; color: #d9d9d9;'>Gestão de Mídias</h1> </header> <main style='width: 50%; height: 100%; display: block; margin: 0 auto; padding: 1em;'> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Nome: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.name}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Empresa: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.enterprise}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Cargo na empresa: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.office}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Email: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${body.from}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Telefone: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.tel}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Número de funcionários: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.select}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Estudo Estratégico Inicial: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.steps[1]}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Elaboração do questionário: </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.steps[2]}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Divulgação: Formulário </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.steps[3]}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Estudo das Redes Sociais </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.steps[4]}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Análise: Empresa e seus Concorrentes </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${step5}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Tabulação de dados </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${step8}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Elaboração de Estratégias </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.steps[6]}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Finalização do Projeto </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.steps[7]}</h3> <h2 style='font-family: Poppins, sans-serif ; font-weight: 600; font-size: 12pt;'> Total </h2> <h3 style='font-family: Poppins, sans-serif ; font-weight: 400; font-size: 10pt; margin-bottom: 10px;'>${text.total}</h3> </main> <footer style='background-color: #111; text-align: center; padding: 1em;'> <span style='font-family: Poppins, sans-serif ; font-weight: 500; color: #d9d9d9; display: flex; align-items: center; justify-content: center;'>&copy; Desenvolvido por <a style='margin: 0 0.3em;text-decoration: none; color: #1f1fb6;' href='https://infoalto.com.br'>InfoAlto </a>com muito <svg style='width: 20px; height: 20px; margin-left: 0.5em;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'> <path fill='#DD2E44' d='M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z'/> </svg> </span> </footer></body></html>`
      return html;
    }
  }

  const body = request.body;
  const { text } = request.body;
  const step5 = verification(text.steps[5]);
  const step8 = verification(text.steps[8]);

  const mailBody = {
    to: body.to,
    from: body.from,
    subject: body.subject,
    html: getHtml(body.form),
    data_envio: getDate()
  }
  client.setApiKey(process.env.API_KEY);
  await client.send(mailBody)
    .then(data => {
      console.log(data);
      response.status(200).json({status: "OK", content: mailBody})
    })
    .catch(error => response.status(401).json(error))
}

module.exports = { MailController }