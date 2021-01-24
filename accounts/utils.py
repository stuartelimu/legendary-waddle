import random

def random_verification_code_generator():
    digits = '012345679'
    code = ''
    for i in range(0,6):
        code += random.choice(digits)
    return code

def unique_verification_code_generator(instance):
    verification_code = random_verification_code_generator()

    Klass = instance.__class__

    qs_exists = Klass.objects.filter(code=verification_code).exists()
    if qs_exists:
        return unique_verification_code_generator(instance)
    return verification_code