
import painel from '../../assets/01.svg'
import extrato from '../../assets/icon2.svg'
import objetivos from '../../assets/icon3.svg'
import planejamento from '../../assets/icon4.svg'
import investimentos from '../../assets/icon5.svg'
import sincronizar_contas from '../../assets/icon6.svg'

import { NavigationContainer } from "./styled";


export default function Navigation() {

    return(
        <NavigationContainer>
            <div>
                <img src={painel} alt="Painel" /><span>Painel</span>
            </div>

            <div>
                <img src={extrato} alt="Extrato" /><span>Extrato</span>
            </div>

            <div>
                <img src={objetivos} alt="Objetivos" /><span>Objetivos</span>
            </div>

            <div>
                <img src={planejamento} alt="Planejamentos" /><span>Planejamentos</span>
            </div>

            <div>
                <img src={investimentos} alt="Investimentos" /><span>Investimentos</span>
            </div>

            <div>
                <img src={sincronizar_contas} alt="Sincronizar contas" /><span>Sincronizar contas</span>
            </div>
        </NavigationContainer>
    )
}