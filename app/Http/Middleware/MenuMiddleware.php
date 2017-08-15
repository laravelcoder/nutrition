<?php

    namespace App\Http\Middleware;

    use Closure;
    use Menu;
    use View;

    class MenuMiddleware
    {
        /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request $request
         * @param  \Closure                 $next
         *
         * @return mixed
         */
        public function handle($request, Closure $next)
        {
            Menu::make('primary', function($menu){
                $menu->add('Home', ['route' => 'homepage', 'class' => 'navbar-home', 'id' => 'home'])->link->secure();
                $menu->add('About', ['url' => 'about', 'class' => 'navbar-about'])->link->secure();
                // $menu->add('Parties', ['url' => 'parties', 'class' => 'navbar-parties'])->link->secure();
                // $menu->add('Opportunity', ['url' => 'opportunity', 'class' => 'navbar-opportunity'])->link->secure();
                $menu->add('Contact', 'contact')->link->secure();
            });

            return $next($request);
        }
    }
