    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    console.log('here!!')
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    console.log(pdfjsLib)
    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = '../public/js/pdf.worker.js';
    pdfjsLib.disableWorker = true;