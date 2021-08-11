import React from 'react';

function FormError({errorMessage}) {
    return (
        <div>
            <p className="mt-2 text-sm text-red-600 mx-auto ">
                {errorMessage}
            </p>
        </div>
    );
}

export default FormError;