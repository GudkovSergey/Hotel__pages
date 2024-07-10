import './item-quantity-dropdown.scss';
import '../item-quantity-dropdown/dropdown-with-button/dropdownWithButton';
class Counter {
    constructor(selector,{counterDefault=0 , counterName}) {
        const parent = document.querySelector(selector);
        this.counterActual = counterDefault;
        this.counterName =counterName;
        this.refsCount = {

            buttonMinus: parent.querySelector('.minus'),
            buttonPlus: parent.querySelector('.plus'),
            divCount: parent.querySelector('.countNumber'),
            spanCounterItem: parent.querySelector('.counterItem')
        }
        this.updateCounter();
        this.addListeners();
    }
    updateCounter(){
        this.refsCount.divCount.textContent = this.counterActual;
        this.refsCount.spanCounterItem.textContent = this.counterName;
    }

    addListeners() {

        this.refsCount.buttonPlus.addEventListener('click', this.increments.bind(this));
        this.refsCount.buttonMinus.addEventListener('click', this.decrements.bind(this))
    }

    increments() {
        this.counterActual++
        this.updateCounter();
    };

    decrements() {
        if (this.counterActual > 0) {
            this.counterActual--
        }
        this.updateCounter();
    };
};
new Counter('.counter1',{counterName:'спальни'});
new Counter('.counter2',{counterName:'кровати'});
new Counter('.counter3',{counterName:'ванные комнаты'});