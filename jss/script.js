import ImgEvidence from './modules/img-evidence.js';
import Assessment from './modules/assessment.js';
import BordersToggle from './modules/borders-toggle.js'
import SelectSizes from './modules/select-sizes.js';
import CarrosselSlide from './modules/carrossel-slide.js';
import Mask from './modules/mask.js';
import Dropdowns from './modules/dropdowns.js';
import Debounce from './modules/debounce.js';
import Slider from './modules/slider.js';
import SvgHeart from './modules/SvgHeat.js';


const imgEvidence = new ImgEvidence();
imgEvidence.init();

const svgHeart = new SvgHeart();
const assessment= new Assessment();
const bordersToggle= new BordersToggle();
const selectSizes= new SelectSizes();
const carrossel = new CarrosselSlide();
const mask = new Mask();
const dropdowns = new Dropdowns();
const debounce = new Debounce();
const slider = new Slider();


