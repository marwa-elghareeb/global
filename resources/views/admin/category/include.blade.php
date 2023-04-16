<ol>
    @foreach($childs as $child)
    <li>
    <li class="dd-item" data-id="3">
        <div class="dd-handle">{{ $child->id}} - {{ $child->name_ar}}
            <span style="float:right;" class="badge badge-primary badge-pill"></span>
        </div>
    </li>

    {{ $child->name_ar }}
    @if(count($child->childs))
    @include('admin.category.include',['childs' => $child->childs])
    @endif


    </div>
    </li>
    @endforeach
</ol>