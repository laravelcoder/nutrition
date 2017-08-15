<aside class="main-sidebar" id="sidebar-wrapper">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
            <div class="pull-left image">
                @if(Gravatar::exists(Auth::user()->email)):
                <img src="{{ Gravatar::src(Auth::user()->email) }}" class="img-circle" alt="User Image"/>
            @else
                <img src="https://placehold.it/150x150" class="img-circle" alt="User Image"/>
            @endif
            </div>
            <div class="pull-left info">
                @if (Auth::guest())
                <p>Truth About Nutrition</p>
                    <!-- Status -->
                    <a href="#"><i class="fa fa-cross text-error"></i> Offline</a>
                @else
                    <p>{{ Auth::user()->name}}</p>
                    <!-- Status -->
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                @endif

            </div>
        </div>

        <!-- search form (Optional) -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search..."/>
          <span class="input-group-btn">
            <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
            </div>
        </form>
        <!-- Sidebar Menu -->

        <ul class="sidebar-menu">
            @include('layouts.menu')
        </ul>
        <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
</aside>
