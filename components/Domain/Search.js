import React, { Component, useState } from 'react';
import axios from 'axios'
import { isEmpty } from '../../validation/is_empty'
import ListDomain from './ListDomain'
import Pricing from './Pricing'
import { useTranslation } from 'react-i18next';

const Search = () => {
    const {t}=useTranslation("domain")
    const
        [domain, setDomain] = useState(''),
        [domain_data, setDomainData] = useState(),
        [suggest_name, setSuggestName] = useState(),
        [loading, setLoading] = useState(false),
        [error, setError] = useState()

    async function onSubmitSeachDomain(e, domain) {
        e.preventDefault()
        const data = { domain }
        setError()
        setDomainData()
        setSuggestName()
        setLoading(true)
        try {
            const { data: res } = await axios.post('/api/check-domain', data)
            setDomain(res.domain)
            setSuggestName(res.suggestName)
            delete res.suggestName
            setDomainData({ ...res })
            setLoading(false)
        } catch (error) {
            setError(error.response.data.domain)
            setLoading(false)
            console.log(error.response.data);
        }
    }

    return (
        <div className="pricing-area pt-70 pb-50">
            <div className="container">
                {loading ? 'Loading' :
                    <div className="widget-area text-center" style={{paddingTop:"8vmax"}}>
                        <h1>{t("firstbanner.main")}</h1>
                        <div  className="widget widget_search">
                            <form onSubmit={(e) => onSubmitSeachDomain(e, domain)} className="search-form">
                                <label>
                                    <input name="domain" value={domain} onChange={e => setDomain(e.target.value)} style={{ borderRadius: '10px 10px 10px 10px' }} type="search" className="search-field" placeholder={t("firstbanner.placeholder")} />
                                </label>
                                <button type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                }
                <div className="text-center mt-3">
                    <h4 className="text-danger">{error}</h4>
                </div>


                <div className="row">

                    <Pricing domain_data={domain_data} />

                </div>

                {/* LIST */}

                <ListDomain suggest_name={suggest_name} />

            </div>
        </div>
    )
}

export default Search;