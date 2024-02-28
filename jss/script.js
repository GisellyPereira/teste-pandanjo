import ScrollSuave from './modules/scroll-suave.js';
import Modal from './modules/modal.js';
import ImgEvidence from './modules/img-evidence.js';
import Assessment from './modules/assessment.js';
import BordersToggle from './modules/borders-toggle.js'
import SelectSizes from './modules/select-sizes.js';
import CarrosselSlide from './modules/carrossel-slide.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const imgEvidence = new ImgEvidence();
imgEvidence.init();

const assessment= new Assessment();


const bordersToggle= new BordersToggle();


const selectSizes= new SelectSizes();


const carrossel = new CarrosselSlide();



