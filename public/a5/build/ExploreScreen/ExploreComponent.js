import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10">
                    <input  class="form-control form-input rounded-pill" type="text" placeholder="    Search Twitter"/>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html">
                        <img src="../../images/settings.png" width="30px" height="25px" />
                    </a>
                </div>
            </div><br>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a></li>
                <li class="nav-item d-sm-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a></li>
            </ul>

            <img style="width: 100%;" src="../../images/spaceX.jfif">
            <p>SpaceX's Starship</p>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
