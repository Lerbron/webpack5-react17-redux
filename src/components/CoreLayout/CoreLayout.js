import React, { memo } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Cookies from "js-cookie";

function checkIsLogin() {
  // check login sample
  return Cookies.get("token") ? true : false;
}

const CoreLayout = memo((props) => {
  let { routes } = props;
  return (
    <div className="core-layout">
      <Switch>
        {routes.map((route) => {
          const { path, exact, auth } = route;
          {/* const Component = component; */}
          return (
            <Route
              key={path + ""}
              exact={!!exact}
              path={path}
              render={(props) => {
                if (!auth) {
                  return <route.component {...props} />;
                }

                if (checkIsLogin()) {
                  return <route.component {...props} />;
                }
                return <Redirect to="/login" />;
              }}
            />
          );
        })}
      </Switch>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
