import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

import Perfil from '../pages/Perfil';
import Dashboard from '../pages/Dashboard';

import Comtimer from '../pages/Comtimer';
import Percepcaovisual from '../pages/percepcaovisual';
import Apostila from '../pages/Apostila';
import Autoaceleracao from '../pages/Autoaceleracao';
import Memorizacao from '../pages/Memorizacao';
import Avaliacao from '../pages/Modulos/Avaliacao';
import Testeavaliacao from '../pages/Modulos/Avaliacao/Testeavaliacao';
import Resultado from '../pages/Modulos/Avaliacao/Resultado';
import Teste1 from '../pages/Modulos/Intermediario/Aula09/Teste1';
import Teste2 from '../pages/Modulos/Intermediario/Aula09/Teste2';
import Teste3 from '../pages/Modulos/Intermediario/Aula09/Teste3';
import Teste4 from '../pages/Modulos/Intermediario/Aula09/Teste4';
import Teste5 from '../pages/Modulos/Intermediario/Aula09/Teste5';
import Teste6 from '../pages/Modulos/Intermediario/Aula11/Teste6';
import Teste7 from '../pages/Modulos/Intermediario/Aula11/Teste7';
import Teste8 from '../pages/Modulos/Intermediario/Aula11/Teste8';
import Teste9 from '../pages/Modulos/Intermediario/Aula11/Teste9';
import Teste10 from '../pages/Modulos/Intermediario/Aula11/Teste10';
import Teste11 from '../pages/Modulos/Avancado/Aula13/Teste1';
import Teste12 from '../pages/Modulos/Avancado/Aula13/Teste2';
import Teste13 from '../pages/Modulos/Avancado/Aula13/Teste3';
import Teste14 from '../pages/Modulos/Avancado/Aula13/Teste4';
import Teste15 from '../pages/Modulos/Avancado/Aula13/Teste5';
import Teste16 from '../pages/Modulos/Avancado/Aula15/Teste6';
import Teste17 from '../pages/Modulos/Avancado/Aula15/Teste7';
import Teste18 from '../pages/Modulos/Avancado/Aula15/Teste8';
import Teste19 from '../pages/Modulos/Avancado/Aula15/Teste9';
import Teste20 from '../pages/Modulos/Avancado/Aula15/Teste10';
import Teste1avaliacao from '../pages/Modulos/Intermediario/Aula09/Teste1/Avaliacao';
import Teste2avaliacao from '../pages/Modulos/Intermediario/Aula09/Teste2/Avaliacao';
import Teste3avaliacao from '../pages/Modulos/Intermediario/Aula09/Teste3/Avaliacao';
import Teste4avaliacao from '../pages/Modulos/Intermediario/Aula09/Teste4/Avaliacao';
import Teste5avaliacao from '../pages/Modulos/Intermediario/Aula09/Teste5/Avaliacao';
import Teste6avaliacao from '../pages/Modulos/Intermediario/Aula11/Teste6/Avaliacao';
import Teste7avaliacao from '../pages/Modulos/Intermediario/Aula11/Teste7/Avaliacao';
import Teste8avaliacao from '../pages/Modulos/Intermediario/Aula11/Teste8/Avaliacao';
import Teste9avaliacao from '../pages/Modulos/Intermediario/Aula11/Teste9/Avaliacao';
import Teste10avaliacao from '../pages/Modulos/Intermediario/Aula11/Teste10/Avaliacao';
import Teste11avaliacao from '../pages/Modulos/Avancado/Aula13/Teste1/Avaliacao';
import Teste12avaliacao from '../pages/Modulos/Avancado/Aula13/Teste2/Avaliacao';
import Teste13avaliacao from '../pages/Modulos/Avancado/Aula13/Teste3/Avaliacao';
import Teste14avaliacao from '../pages/Modulos/Avancado/Aula13/Teste4/Avaliacao';
import Teste15avaliacao from '../pages/Modulos/Avancado/Aula13/Teste5/Avaliacao';
import Teste16avaliacao from '../pages/Modulos/Avancado/Aula15/Teste6/Avaliacao';
import Teste17avaliacao from '../pages/Modulos/Avancado/Aula15/Teste7/Avaliacao';
import Teste18avaliacao from '../pages/Modulos/Avancado/Aula15/Teste8/Avaliacao';
import Teste19avaliacao from '../pages/Modulos/Avancado/Aula15/Teste9/Avaliacao';
import Teste20avaliacao from '../pages/Modulos/Avancado/Aula15/Teste10/Avaliacao';
import Teste1resultado from '../pages/Modulos/Intermediario/Aula09/Teste1/Resultado';
import Teste2resultado from '../pages/Modulos/Intermediario/Aula09/Teste2/Resultado';
import Teste3resultado from '../pages/Modulos/Intermediario/Aula09/Teste3/Resultado';
import Teste4resultado from '../pages/Modulos/Intermediario/Aula09/Teste4/Resultado';
import Teste5resultado from '../pages/Modulos/Intermediario/Aula09/Teste5/Resultado';
import Teste6resultado from '../pages/Modulos/Intermediario/Aula11/Teste6/Resultado';
import Teste7resultado from '../pages/Modulos/Intermediario/Aula11/Teste7/Resultado';
import Teste8resultado from '../pages/Modulos/Intermediario/Aula11/Teste8/Resultado';
import Teste9resultado from '../pages/Modulos/Intermediario/Aula11/Teste9/Resultado';
import Teste10resultado from '../pages/Modulos/Intermediario/Aula11/Teste10/Resultado';
import Teste11resultado from '../pages/Modulos/Avancado/Aula13/Teste1/Resultado';
import Teste12resultado from '../pages/Modulos/Avancado/Aula13/Teste2/Resultado';
import Teste13resultado from '../pages/Modulos/Avancado/Aula13/Teste3/Resultado';
import Teste14resultado from '../pages/Modulos/Avancado/Aula13/Teste4/Resultado';
import Teste15resultado from '../pages/Modulos/Avancado/Aula13/Teste5/Resultado';
import Teste16resultado from '../pages/Modulos/Avancado/Aula15/Teste6/Resultado';
import Teste17resultado from '../pages/Modulos/Avancado/Aula15/Teste7/Resultado';
import Teste18resultado from '../pages/Modulos/Avancado/Aula15/Teste8/Resultado';
import Teste19resultado from '../pages/Modulos/Avancado/Aula15/Teste9/Resultado';
import Teste20resultado from '../pages/Modulos/Avancado/Aula15/Teste10/Resultado';
import Basico from '../pages/Modulos/Basico';
import Aula01 from '../pages/Modulos/Basico/Aula01';
import Aula02 from '../pages/Modulos/Basico/Aula02';
import Aula03 from '../pages/Modulos/Basico/Aula03';
import Aula04 from '../pages/Modulos/Basico/Aula04';
import Aula05 from '../pages/Modulos/Basico/Aula05';
import Aula06 from '../pages/Modulos/Basico/Aula06';
import Exercicios from '../pages/Modulos/Intermediario/Aula07/Exercicios';
import Exerciciosavaliacao from '../pages/Modulos/Intermediario/Aula07/Exercicios/Avaliacao';
import Intermediario from '../pages/Modulos/Intermediario';
import Aula07 from '../pages/Modulos/Intermediario/Aula07';
import Aula08 from '../pages/Modulos/Intermediario/Aula08';
import Aula09 from '../pages/Modulos/Intermediario/Aula09';
import Aula10 from '../pages/Modulos/Intermediario/Aula10';
import Aula11 from '../pages/Modulos/Intermediario/Aula11';
import Avancado from '../pages/Modulos/Avancado';
import Aula12 from '../pages/Modulos/Avancado/Aula12';
import Aula13 from '../pages/Modulos/Avancado/Aula13';
import Aula14 from '../pages/Modulos/Avancado/Aula14';
import Aula15 from '../pages/Modulos/Avancado/Aula15';
import Aula16 from '../pages/Modulos/Avancado/Aula16';
import Grafico from '../pages/Grafico';
import Suporte from '../pages/Suporte';
import Chamado from '../pages/Chamado';
import Videos from '../pages/Videos';
import Admin from '../pages/Admin';
import Alunos from '../pages/Admin/Alunos';
import AdminVideos from '../pages/Admin/Videos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} isLogado />
      <Route path="/cadastro" component={Cadastro} isLogado />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/comtimer/:id" component={Comtimer} isPrivate />
      <Route
        path="/percepcaovisual/:id/aula/:aula"
        component={Percepcaovisual}
        isPrivate
      />
      <Route path="/apostila/:id/aula/:aula" component={Apostila} isPrivate />
      <Route path="/autoaceleracao/:id/:modulo/:a" component={Autoaceleracao} isPrivate />
      <Route path="/memorizacao/:id" component={Memorizacao} isPrivate />
      <Route path="/avaliacao" exact component={Avaliacao} isPrivate />
      <Route
        path="/avaliacao/testeavaliacao"
        component={Testeavaliacao}
        isPrivate
      />
      <Route path="/avaliacao/resultado/:id" component={Resultado} isPrivate />
      <Route path="/intermediario/teste1" exact component={Teste1} isPrivate />
      <Route path="/intermediario/teste2" exact component={Teste2} isPrivate />
      <Route path="/intermediario/teste3" exact component={Teste3} isPrivate />
      <Route path="/intermediario/teste4" exact component={Teste4} isPrivate />
      <Route path="/intermediario/teste5" exact component={Teste5} isPrivate />
      <Route path="/intermediario/teste6" exact component={Teste6} isPrivate />
      <Route path="/intermediario/teste7" exact component={Teste7} isPrivate />
      <Route path="/intermediario/teste8" exact component={Teste8} isPrivate />
      <Route path="/intermediario/teste9" exact component={Teste9} isPrivate />
      <Route
        path="/intermediario/teste10"
        exact
        component={Teste10}
        isPrivate
      />
      <Route path="/avancado/teste1" exact component={Teste11} isPrivate />
      <Route path="/avancado/teste2" exact component={Teste12} isPrivate />
      <Route path="/avancado/teste3" exact component={Teste13} isPrivate />
      <Route path="/avancado/teste4" exact component={Teste14} isPrivate />
      <Route path="/avancado/teste5" exact component={Teste15} isPrivate />
      <Route path="/avancado/teste6" exact component={Teste16} isPrivate />
      <Route path="/avancado/teste7" exact component={Teste17} isPrivate />
      <Route path="/avancado/teste8" exact component={Teste18} isPrivate />
      <Route path="/avancado/teste9" exact component={Teste19} isPrivate />
      <Route path="/avancado/teste10" exact component={Teste20} isPrivate />
      <Route
        path="/intermediario/teste1/avaliacao"
        component={Teste1avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste2/avaliacao"
        component={Teste2avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste3/avaliacao"
        component={Teste3avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste4/avaliacao"
        component={Teste4avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste5/avaliacao"
        component={Teste5avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste6/avaliacao"
        component={Teste6avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste7/avaliacao"
        component={Teste7avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste8/avaliacao"
        component={Teste8avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste9/avaliacao"
        component={Teste9avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste10/avaliacao"
        component={Teste10avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste1/avaliacao"
        component={Teste11avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste2/avaliacao"
        component={Teste12avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste3/avaliacao"
        component={Teste13avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste4/avaliacao"
        component={Teste14avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste5/avaliacao"
        component={Teste15avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste6/avaliacao"
        component={Teste16avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste7/avaliacao"
        component={Teste17avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste8/avaliacao"
        component={Teste18avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste9/avaliacao"
        component={Teste19avaliacao}
        isPrivate
      />
      <Route
        path="/avancado/teste10/avaliacao"
        component={Teste20avaliacao}
        isPrivate
      />
      <Route
        path="/intermediario/teste1/resultado"
        component={Teste1resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste2/resultado"
        component={Teste2resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste3/resultado"
        component={Teste3resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste4/resultado"
        component={Teste4resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste5/resultado"
        component={Teste5resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste6/resultado"
        component={Teste6resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste7/resultado"
        component={Teste7resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste8/resultado"
        component={Teste8resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste9/resultado"
        component={Teste9resultado}
        isPrivate
      />
      <Route
        path="/intermediario/teste10/resultado"
        component={Teste10resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste1/resultado"
        component={Teste11resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste2/resultado"
        component={Teste12resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste3/resultado"
        component={Teste13resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste4/resultado"
        component={Teste14resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste5/resultado"
        component={Teste15resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste6/resultado"
        component={Teste16resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste7/resultado"
        component={Teste17resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste8/resultado"
        component={Teste18resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste9/resultado"
        component={Teste19resultado}
        isPrivate
      />
      <Route
        path="/avancado/teste10/resultado"
        component={Teste20resultado}
        isPrivate
      />
      <Route path="/basico" exact component={Basico} isPrivate />
      <Route path="/basico/aula01" component={Aula01} isPrivate />
      <Route path="/basico/aula02" component={Aula02} isPrivate />
      <Route path="/basico/aula03" component={Aula03} isPrivate />
      <Route path="/basico/aula04" component={Aula04} isPrivate />
      <Route path="/basico/aula05" component={Aula05} isPrivate />
      <Route path="/basico/aula06" component={Aula06} isPrivate />
      <Route path="/intermediario" exact component={Intermediario} isPrivate />
      <Route
        path="/intermediario/exercicios/:id"
        exact
        component={Exercicios}
        isPrivate
      />
      <Route
        path="/intermediario/exercicios/avaliacao/:id"
        component={Exerciciosavaliacao}
        isPrivate
      />
      <Route path="/intermediario/aula07" component={Aula07} isPrivate />
      <Route path="/intermediario/aula08" component={Aula08} isPrivate />
      <Route path="/intermediario/aula09" component={Aula09} isPrivate />
      <Route path="/intermediario/aula10" component={Aula10} isPrivate />
      <Route path="/intermediario/aula11" component={Aula11} isPrivate />
      <Route path="/avancado" exact component={Avancado} isPrivate />
      <Route path="/avancado/aula12" component={Aula12} isPrivate />
      <Route path="/avancado/aula13" component={Aula13} isPrivate />
      <Route path="/avancado/aula14" component={Aula14} isPrivate />
      <Route path="/avancado/aula15" component={Aula15} isPrivate />
      <Route path="/avancado/aula16" component={Aula16} isPrivate />
      <Route path="/grafico/:id" component={Grafico} isPrivate />
      <Route path="/perfil" component={Perfil} isPrivate />
      <Route path="/suporte" component={Suporte} isPrivate />
      <Route path="/chamado/:id" component={Chamado} isPrivate />
      <Route path="/video/:id" component={Videos} isPrivate />
      <Route path="/admin" exact component={Admin} isPrivate />
      <Route path="/admin/alunos" component={Alunos} isPrivate />
      <Route path="/admin/videos" component={AdminVideos} isPrivate />
    </Switch>
  );
}
