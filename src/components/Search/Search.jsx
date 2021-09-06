import FormContainer from './Form/FormContainer';
import ResultContainer from './Result/ResultContainer';
import style from './Search.module.css';
let Search=()=>{
    return (<div className={style.search}>
        <FormContainer></FormContainer>
        <ResultContainer></ResultContainer>
    </div>);
}
export default Search;