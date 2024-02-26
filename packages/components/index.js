import Icon from './icon/index.vue'
import Button from './button/index.vue'

// 按需引入
const component = [Button, Icon];

const WilderUI =  {
    install(Vue) {
        component.forEach((item,index) => {
            Vue.component(item.name, component[index]);
        });
    },
};

export default WilderUI;
