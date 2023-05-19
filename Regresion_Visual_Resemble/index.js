const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const resemble = require('resemblejs');
const basePath = './results/';

const subdirs = fs.readdirSync(basePath).filter((file) => {
  return fs.statSync(path.join(basePath, file)).isDirectory();
});



async function compareImages(beforeImagePath, afterImagePath) {
  const beforeImageBuffer = fs.readFileSync(beforeImagePath);
  const afterImageBuffer = fs.readFileSync(afterImagePath);

  const diff = await new Promise((resolve, reject) => {
    resemble(beforeImageBuffer)
      .compareTo(afterImageBuffer)
      .onComplete((data) => {
        if (data.error) {
          reject(data.error);
        } else {
          resolve(data);
        }
      });
  });

  return diff;
}

async function executeTest() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  let resultInfo = {}

  for(folderPath of subdirs ){
    folderPath = basePath + folderPath ;
    
    try {
      const files = fs.readdirSync(folderPath)
                    .filter(file => file.startsWith('before') && file.endsWith('.png'));
      
  
      const datetime = new Date().toISOString().replace(/:/g, '-');
  
      resultInfo = {}
  
      for (let i = 1; i <= files.length; i++) {
        const beforeImagePath = `${folderPath}/before-${i}.png`;
        const afterImagePath = `${folderPath}/after-${i}.png`;
  
        const diff = await compareImages(beforeImagePath, afterImagePath);
  
        resultInfo[i] = {
          isSameDimensions: diff.isSameDimensions,
          dimensionDifference: diff.dimensionDifference,
          rawMisMatchPercentage: diff.rawMisMatchPercentage,
          misMatchPercentage: diff.misMatchPercentage,
          diffBounds: diff.diffBounds,
          analysisTime: diff.analysisTime
      }
  
        const diffImagePath = `${folderPath}/compare-${i}.png`;
        fs.writeFileSync(diffImagePath, Buffer.from(diff.getBuffer()));
        fs.writeFileSync(`${folderPath}/report.html`, createReport(datetime, resultInfo), { flag: 'w' });
        fs.copyFileSync('./index.css', `${folderPath}/index.css`);

     
        console.log(`Comparación entre ${beforeImagePath} y ${afterImagePath} completada. Imagen de diferencia guardada en ${diffImagePath}.`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      await browser.close();
    }
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")  
  }

  }
  
  
  

function createReport(datetime, resultInfo) {
  let reportHtml = `
    <html>
      <head>
        <title>VRT Report</title>
        <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
        <h1>VRT Report</h1>
        <p>Executed: ${datetime}</p>
  `;

  for (let i = 1; i <= Object.keys(resultInfo).length; i++) {
    reportHtml += `
      <div class="screenshot" id="test${i}">
        <div class="btitle">
          <h2>Screenshot: ${i}</h2>
          <p>Data: ${JSON.stringify(resultInfo[i])}</p>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Reference</span>
            <img class="img2" src="before-${i}.png" id="refImage" label="Reference">
          </div>
          <div class="imgcontainer">
            <span class="imgname">Test</span>
            <img class="img2" src="after-${i}.png" id="testImage" label="Test">
          </div>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Diff</span>
            <img class="imgfull" src="./compare-${i}.png" id="diffImage" label="Diff">
          </div>
        </div>
      </div>
    `;
  }

  reportHtml += `
      </body>
    </html>
  `;

  return reportHtml;
}


(async () => console.log(await executeTest()))();

