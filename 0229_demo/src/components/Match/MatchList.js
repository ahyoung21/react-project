import React, { Component } from "react";
import axios from "axios";
import Match from "./Match";
class MatchList extends Component {
  state = {
    loading: false,
    data: null
  };
  getData = async () => {
    try {
      this.setState({
        loading: true
      });
      const { startDate, endDate } = this.props.range;
      const { leagueId } = this.props;
      const extraQuery = `&from=${startDate}&to=${endDate}&league_id=${leagueId}`;
      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events${extraQuery}&APIkey=227184e5d319c06c1ead434d925cef01bc1a8495821a01079bbe7c5182fde56f`
      );
      this.setState({
        data: response.data
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.range !== prevProps.range ||
      this.props.leagueId !== prevProps.leagueId
    ) {
      this.getData();
    }
  }
  render() {
    const { loading, data } = this.state;
    return (
      <div>
        {loading && (
          <h3 style={{ textAlign: "center" }}>데이터를 불러오는 중입니다...</h3>
        )}
        {!loading &&
          data &&
          !data.error &&
          data.map((d) => <Match key={d.match_id} data={d} />)}
      </div>
    );
  }
}
export default MatchList;
