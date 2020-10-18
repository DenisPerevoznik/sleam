import React, { useContext, useEffect } from 'react';
import { CompanyItem } from '../components/company/CompanyItem';
import {CreateModal} from '../components/company/CreateModal';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContext';
import { createCompany, getCompanies } from '../redux/company/actions';

export const Companies = () => {

    const {addToast} = useToasts();
    const dispatch = useDispatch();
    const companies = useSelector(state => state.company.companies);
    const auth = useContext(AuthContext);

    useEffect(() => {
        dispatch(getCompanies(auth.token));
    }, [])

    function create(name){
        dispatch(createCompany({name}, auth.token));
    }

    return (
        <div className="container with-header">
            <div className="row">
                {companies.map(c => <div className="col-md-3 col-sm-12" key={c.id}>
                    <CompanyItem company={c}/></div>)}
                <CreateModal onCreate={create}/>
            </div>
        </div>
    );
}