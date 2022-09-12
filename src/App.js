import React, { useRef } from 'react';
import JsPdf from 'jspdf';

import { rowsToPages } from './helpers';
import Header from './components/Header';
import Table from './components/Table';
import Payments from './components/Payments';
import Footer from './components/Footer';

import data from './data.json';

import './App.sass';

function App() {
  const ref = useRef([]);

  function downloadPDF() {
    const doc = new JsPdf('p', 'mm', 'a4', false)
    function addPage(index) {
      doc.html(ref.current[index], {
        html2canvas: {
          scale: 0.26
        },
        y: 300 * index,
        callback: () => {
          if (ref.current.length === index + 1) {
            doc.save();
          }
          doc.addPage();
          addPage(index + 1);
        }
      })
    }
    addPage(0);
  }

  return (
    <div className="App">
      {rowsToPages(data).map((value, index, array) => (
        <div className="Wrapper" key={JSON.stringify(value)}>
            <div className="Page" ref={el => ref.current[index] = el}>
              <Header
                invoice={data.invoice}
                dates={data.dates}
                recipient={data.recipient}
                invoiceData={data.invoiceData}
                dueDate={data.dueDate}
                first={index === 0}
              />
              <Table
                payments={value}
                allHours={data.allHours}
                allFee={data.allFee}
                last={index === array.length - 1 || array[index + 1]?.length === 0}
              />
              {index === array.length - 1 &&
                <Payments
                  intermediary={data.intermediary}
                  beneficiary={data.beneficiary}
                />
              }
              <Footer />
            </div>
        </div>
      ))}
      <button onClick={downloadPDF} className="Button">Download PDF</button>
    </div>
  );
}

export default App;
