import _ from 'lodash';
console.log('print model is load')
export default function printMe(){
    console.log(
        _.join(['Another', 'module', 'loaded!'], ' ')
    );
}
