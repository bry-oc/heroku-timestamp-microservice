function Welcome(){
    return(
        <div className="container welcome">
            <hr></hr>
            <p><b>Welcome! </b>This is a site setup to display the UTC time and Unix timestamp of a given date.  You may enter a date below and have it displayed on this webpage or enter nothing and you will recieve the UTC time and Unix timestamp of the current time. You can also send a request to our server to see the response (<a href="https://timestamp-microservice-bryoc.herokuapp.com/api/" target="_blank">https://timestamp-microservice-bryoc.herokuapp.com/api/</a>&lt;date&gt;, where &lt;date&gt; is replaced by your given date).</p>
            <hr></hr>
        </div>
    );
}
export default Welcome;