import React from "react";
import "./AdminDashboard.css";
function AdminDashboard() {
  return (
    <div>
      <div class="d-flex flex-column bg-white flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          class="navbar1 show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span class="navbar-toggler-icon"></span>{" "}
            </button>{" "}
            <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 logo" href="#">
              {" "}
              Admin{" "}
            </a>
            <div class="navbar-user d-lg-none">
              <div class="dropdown">
                <a
                  href="#"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar-parent-child">
                    {" "}
                    <img
                      alt="Image Placeholder"
                      src=""
                      class="avatar avatar- rounded-circle"
                    />{" "}
                    <span class="avatar-child avatar-badge bg-success"></span>{" "}
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="sidebarAvatar"
                >
                  {" "}
                  <a href="#" class="dropdown-item">
                    Profile
                  </a>{" "}
                  <a href="#" class="dropdown-item">
                    Settings
                  </a>{" "}
                  <a href="/sign-in" class="dropdown-item">
                    Billing
                  </a>
                  <hr class="dropdown-divider" />{" "}
                  <a href="/sign-in" class="dropdown-item">
                    Logout
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="collapse navbar-collapse" id="sidebarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-house"></i> Dashboard{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="/orders">
                    {" "}
                    <i class="bi bi-bar-chart"></i> Orders{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-chat"></i> Messages{" "}
                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                      6
                    </span>{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="/manage-menu">
                    {" "}
                    <i class="bi bi-bookmarks"></i> Menu Manage{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-people"></i> Rooms Manage{" "}
                  </a>{" "}
                </li>
              </ul>
              <hr class="navbar-divider my-5 opacity-20" />
              <ul class="navbar-nav mb-md-4">
                <li>
                  <div
                    class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                    href="#"
                  >
                    {" "}
                    Customers{" "}
                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                      13
                    </span>{" "}
                  </div>
                </li>
                <li>
                  {" "}
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        {" "}
                        <img
                          alt="Image Placeholder"
                          src=""
                          class="avatar rounded-circle"
                        />{" "}
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>{" "}
                      </div>
                    </div>
                    <div>
                      {" "}
                      <span class="d-block text-sm font-semibold">
                        {" "}
                        Chathura{" "}
                      </span>{" "}
                      <span class="d-block text-xs text-muted font-regular">
                        {" "}
                        Ratnapura{" "}
                      </span>{" "}
                    </div>
                    <div class="ms-auto">
                      {" "}
                      <i class="bi bi-chat"></i>{" "}
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        {" "}
                        <span class="avatar bg-soft-warning text-warning rounded-circle">
                          JW
                        </span>{" "}
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>{" "}
                      </div>
                    </div>
                    <div>
                      {" "}
                      <span class="d-block text-sm font-semibold">
                        {" "}
                        Manoj{" "}
                      </span>{" "}
                      <span class="d-block text-xs text-muted font-regular">
                        {" "}
                        Mathale{" "}
                      </span>{" "}
                    </div>
                    <div class="ms-auto">
                      {" "}
                      <i class="bi bi-chat"></i>{" "}
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        {" "}
                        <img
                          alt="..."
                          src=""
                          class="avatar rounded-circle"
                        />{" "}
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>{" "}
                      </div>
                    </div>
                    <div>
                      {" "}
                      <span class="d-block text-sm font-semibold">
                        {" "}
                        Sanduni{" "}
                      </span>{" "}
                      <span class="d-block text-xs text-muted font-regular">
                        {" "}
                        Badulla{" "}
                      </span>{" "}
                    </div>
                    <div class="ms-auto">
                      {" "}
                      <i class="bi bi-chat"></i>{" "}
                    </div>
                  </a>{" "}
                </li>
              </ul>
              <div class="mt-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-person-square"></i> Account{" "}
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="/sign-in">
                    {" "}
                    <i class="bi bi-box-arrow-left"></i> Logout{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
              <div class="mb-npx">
                <div class="row align-items-center">
                  <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 class="h2 mb-0 ls-tight">Dashboard</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div class="row g-6 mb-6">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          {" "}
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Income
                          </span>{" "}
                          <span class="h3 font-bold mb-0">Rs900750.90</span>{" "}
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            {" "}
                            <i class="bi bi-credit-card"></i>{" "}
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        {" "}
                        <span class="badge badge-pill  text-success me-2">
                          {" "}
                        </span>{" "}
                        <span class="text-nowrap text-xs text-muted"></span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          {" "}
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Employees
                          </span>{" "}
                          <span class="h3 font-bold mb-0">55</span>{" "}
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            {" "}
                            <i class="bi bi-people"></i>{" "}
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        {" "}
                        <span class="badge badge-pill text-success me-2">
                          {" "}
                        </span>{" "}
                        <span class="text-nowrap text-xs text-muted"></span>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          {" "}
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Active Orders
                          </span>{" "}
                          <span class="h3 font-bold mb-0">5</span>{" "}
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="bi bi-minecart-loaded"></i>{" "}
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill  text-success me-2">
                          {" "}
                        </span>
                        <span class="text-nowrap text-xs text-muted"></span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          {" "}
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Date and Time
                          </span>{" "}
                          <span
                            style={{ fontSize: "24px" }}
                            class="h3 font-bold mb-0"
                          >
                            Jul 10, 2022 10:55
                          </span>{" "}
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            {" "}
                            <i class="bi bi-clock-history"></i>{" "}
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        {" "}
                        <span class="badge badge-pill bg-soft-danger text-danger me-2"></span>{" "}
                        <span class="text-nowrap text-xs text-muted"></span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">Orders</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Food name</th>
                        <th scope="col">noitems</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <img
                            alt="..."
                            src=""
                            class="avatar avatar-sm rounded-circle me-2"
                          />{" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            Chathura{" "}
                          </a>{" "}
                        </td>
                        <td> May 15, 2022 </td>
                        <td>
                          {" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            10:40{" "}
                          </a>{" "}
                        </td>
                        <td> pizza </td>
                        <td>2</td>
                        <td class="text-end">
                          {" "}
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>{" "}
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            {" "}
                            <i class="bi bi-trash"></i>{" "}
                          </button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <img
                            alt="..."
                            src=""
                            class="avatar avatar-sm rounded-circle me-2"
                          />{" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            Manoj{" "}
                          </a>{" "}
                        </td>
                        <td> May 15, 2022 </td>
                        <td>
                          {" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            11:40{" "}
                          </a>{" "}
                        </td>
                        <td> FRID RICE </td>
                        <td>4</td>
                        <td class="text-end">
                          {" "}
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>{" "}
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            {" "}
                            <i class="bi bi-trash"></i>{" "}
                          </button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <img
                            alt="..."
                            src=""
                            class="avatar avatar-sm rounded-circle me-2"
                          />{" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            Dileeshiya{" "}
                          </a>{" "}
                        </td>
                        <td> Mar 14, 2022 </td>
                        <td>
                          {" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            13:23{" "}
                          </a>{" "}
                        </td>
                        <td> BBQ </td>
                        <td>3</td>
                        <td class="text-end">
                          {" "}
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>{" "}
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            {" "}
                            <i class="bi bi-trash"></i>{" "}
                          </button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <img
                            alt="..."
                            src=""
                            class="avatar avatar-sm rounded-circle me-2"
                          />{" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            Sanduni{" "}
                          </a>{" "}
                        </td>
                        <td> May 10, 2022 </td>
                        <td>
                          {" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            15:45{" "}
                          </a>{" "}
                        </td>
                        <td> CHICKEN SUBMARINE </td>
                        <td>2</td>
                        <td class="text-end">
                          {" "}
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>{" "}
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            {" "}
                            <i class="bi bi-trash"></i>{" "}
                          </button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <img
                            alt="..."
                            src=""
                            class="avatar avatar-sm rounded-circle me-2"
                          />{" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            Kavindu{" "}
                          </a>{" "}
                        </td>
                        <td> Apr 10, 2022 </td>
                        <td>
                          {" "}
                          <a class="text-heading font-semibold" href="#">
                            {" "}
                            10:56{" "}
                          </a>{" "}
                        </td>
                        <td> CHICKEN BURGER</td>
                        <td>2</td>
                        <td class="text-end">
                          {" "}
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>{" "}
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            {" "}
                            <i class="bi bi-trash"></i>{" "}
                          </button>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
