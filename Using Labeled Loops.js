


    console.log( isFuzzyMatch( "horse", "s" ) );
    console.log( isFuzzyMatch( "horse", "hs" ) );
    console.log( isFuzzyMatch( "horse", "horse" ) );
    console.log( isFuzzyMatch( "horse", "horses" ) );
    console.log( isFuzzyMatch( "horse", "test" ) );
    console.log( isFuzzyMatch( "horse", "" ) );
    function isFuzzyMatch( targetValue, searchValue ) {
        var searchChars = [ ...searchValue ];
        var targetChars = [ ...targetValue ];
        var matchFound = true;
        var s, t;
        searchLoop:
        while ( s = searchChars.shift() ) {
            targetLoop:
            while ( t = targetChars.shift() ) {
                if ( s == t ) {
                    if ( ! searchChars.length ) {
                        matchFound = false;
                        break searchLoop;
                    }
                    continue searchLoop;
                }
            }
            break;
        }
        return( matchFound );
    }