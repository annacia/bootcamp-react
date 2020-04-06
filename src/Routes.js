import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const FormularioCadastro = React.lazy(() => import('./pages/FormularioCadastro'));
const FormularioCep = React.lazy(() => import('./pages/FormularioCep'));
const ConsumoApi = React.lazy(() => import('./pages/ConsumoApi'));
const RefatorarClass = React.lazy(() => import('./pages/RefatorarClass'));
const TodoListPage = React.lazy(() => import('./pages/TodoListPage'));
const ReactRouter = React.lazy(() => import('./pages/ReactRouter'));
const ConsumoApiAuth = React.lazy(() => import('./pages/ConsumoApiAuth'));
const FormularioFormik = React.lazy(() => import('./pages/FormularioFormik'));

const Routes = () => (
    <Suspense fallback="Loading...">
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            
            <Route exact path='/formulario-cadastro'component={routerProps => <FormularioCadastro {...routerProps} />} />
            
            <Route exact path='/formulario-cep'component={routerProps => <FormularioCep {...routerProps} />} />
            
            <Route exact path='/consumo-api'component={routerProps => <ConsumoApi {...routerProps} />} />
            
            <Route exact path='/refatorar-class'component={routerProps => <RefatorarClass {...routerProps} />} />

            <Route exact path='/todo-list'component={routerProps => <TodoListPage {...routerProps} />} />
            
            <Route exact path='/react-router'component={routerProps => <ReactRouter {...routerProps} />} />
            
            <Route exact path='/consumo-api-auth'component={routerProps => <ConsumoApiAuth {...routerProps} />} />
            
            <Route exact path='/formulario-formik'component={routerProps => <FormularioFormik {...routerProps} />} />
        </Switch>
    </Suspense>
)

export default Routes;