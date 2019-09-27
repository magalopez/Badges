import React from 'react';
import './styles/Badges.css'

import ConfLogo from '../images/badge-header.svg'
import BadgeList from '../components/BadgesList';
import {Link} from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {
  
  state = {
      loading: true,
      error: null,
      data: undefined,
    }

  componentDidMount(){
    this.fetchData()
    this.intervalId = setInterval(()=>this.fetchData(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({loading:true, error: null})
    try 
    {
      const data = await api.badges.list()
      this.setState({loading:false, data: data})
    }
    catch (error)
    {
      this.setState({loading:false, error: error})
    }
  }

  render()
  {
    if(this.state.loading && this.state.data === undefined)
    {
      return <PageLoading />
    }
    if(this.state.error)
    {
      return <PageError error={this.state.error} />
    }
    
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={ConfLogo}
                   alt="ConfLogo"
                   className="Badges_conf-logo"/>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new"
               className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList data={this.state.data}/>
            </div>
            {
              this.state.loading ? <MiniLoader /> : <></>
            }
          </div>
        </div>
      </>
    )
  }
}

export default Badges;