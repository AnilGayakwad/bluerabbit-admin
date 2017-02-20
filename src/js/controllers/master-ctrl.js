/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore','$http', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    //Post Departments
    $scope.postDepartment = function () {
              // use $.param jQuery function to serialize data from JSON
               var data ={
                 name:$scope.departmentName,
                  description:$scope.descriptionOfDepartment,
                  isActive: $scope.departmentIsActive
               };

               var config = {
                   headers : {
                       'Content-Type': 'application/json'
                   }
               }

               $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/departments', data, config)
               .success(function (data, status, headers, config) {
                   $scope.PostDataResponse = data;
                   console.log("dataa",data);
               })
               .error(function (data, status, header, config) {
                   $scope.ResponseDetails = "Data: " + data +
                       "<hr />status: " + status +
                       "<hr />headers: " + header +
                       "<hr />config: " + config;
               });
           };
           //Post category
           $scope.postCategory = function () {
                     // use $.param jQuery function to serialize data from JSON
                      var data ={
                         name:$scope.categoryName,
                         department:$scope.categoryId,
                         isActive: $scope.categoryIsActive
                      };

                      var config = {
                          headers : {
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/categories', data, config)
                      .success(function (data, status, headers, config) {
                          $scope.PostDataResponse = data;
                          console.log("dataa",data);
                      })
                      .error(function (data, status, header, config) {
                          $scope.ResponseDetails = "Data: " + data +
                              "<hr />status: " + status +
                              "<hr />headers: " + header +
                              "<hr />config: " + config;
                      });
                  };

           //get department
           $scope.getDepartment = function () {

                      var config = {
                          headers : {
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.get('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/departments', config)
                      .success(function (data, status, headers, config) {
                          $scope.getDepartmentList = data;
                          console.log("get departments",data);
                          console.log("getDepartmentList",$scope.getDepartmentList);
                      })
                      .error(function (data, status, header, config) {
                          $scope.ResponseDetails = "Data: " + data +
                              "<hr />status: " + status +
                              "<hr />headers: " + header +
                              "<hr />config: " + config;
                      });
                  };
                  $scope.getDepartment();
           //get category
           $scope.getCategory = function () {

                      var config = {
                          headers : {
                              'Content-Type': 'application/json'
                          }
                      }

                      $http.get('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/categories', config)
                      .success(function (data, status, headers, config) {
                          $scope.getCategoriesList = data;
                          console.log("get Categories",data);
                          console.log("categoryName",$scope.categoryName);
                      })
                      .error(function (data, status, header, config) {
                          $scope.ResponseDetails = "Data: " + data +
                              "<hr />status: " + status +
                              "<hr />headers: " + header +
                              "<hr />config: " + config;
                      });
                  };

                  $scope.getCategory();

                  $scope.getCategoryName = function(categoryName){
                      console.log("categoryName",categoryName);
                      $scope.categoryName = categoryName;
                  }
                  $scope.getdepartmentId = function(deptName){
                      console.log("deptName",deptName);
                      $scope.deptName = deptName;
                  }
                  //Post product
                  $scope.postProduct = function () {
                            // use $.param jQuery function to serialize data from JSON
                            var subcat = "no subcat";
                             var data ={
                                name:$scope.productName,
                                description:$scope.productDescription,
                                dept:$scope.deptName,
                                cat:$scope.categoryName,
                                subCat:subcat,
                                 sku: "abcd12345",
                                p1:$scope.productOffer,
                                brand: "abcd",
                                s1: "abcd",
                                s2: "abcd",
                                s3: "abcd",
                                p2: "abcd",
                                mainImageUrl:$scope.productImageUrl,
                                vendorID: 100,
                                quantity:$scope.productquantity,
                                listPrice:$scope.productlistPrice,
                                salePrice:$scope.productSalePrice,
                                isActive: $scope.productisActive
                             };

                             var config = {
                                 headers : {
                                     'Content-Type': 'application/json'
                                 }
                             }

                             $http.post('http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000/api/products', data, config)
                             .success(function (data, status, headers, config) {
                                 $scope.PostDataResponse = data;
                                 console.log("dataa",data);
                             })
                             .error(function (data, status, header, config) {
                                 $scope.ResponseDetails = "Data: " + data +
                                     "<hr />status: " + status +
                                     "<hr />headers: " + header +
                                     "<hr />config: " + config;
                             });
                         };

}
